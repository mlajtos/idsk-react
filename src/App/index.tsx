import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";

import {
    Header,
    Footer,
    Input,
    Button,
    BackLink,
    PhaseBanner,
    Caption,
    Heading,
    Container,
    Content,
    FormGroup,
    Form,
    Label,
    Hint,
    ErrorMessage,
    TextArea,
    ErrorSummary,
    Radios,
    Radio,
    Fieldset,
    FileUpload,
    Checkboxes,
    Checkbox
} from "../IDSK";

import "./style.scss";

const validationSchema = yup.object().shape({
    meno: yup
        .string()
        .required("Meno a priezvisko je povinné pole."),
    vek: yup
        .number()
        .typeError("Vek musí byť číslo.")
        .integer("Vek musí byť celé číslo.")
        .required("Vek je povinné pole.")
        .positive("Vek musí byť pozitívne číslo.")
        .max(200, "Neverím, že máš viac ako 200 rokov."),
    bio: yup
        .string()
        .min(23, "Vaša biografia musí mať minimálne 23 znakov.")
        .max(47, "Vaša biografia nesmie mať viac ako 47 znakov."),
    valid: yup
        .bool()
        .oneOf([true], "Musíte súhlasiť so správnosťou a aktuálnosťou Vašich osobných údajov."),
    // BUG: https://github.com/react-hook-form/react-hook-form/issues/476#issuecomment-552223177
    nationality: yup
        .array()
});

// const defaultValues = {
//     meno: "Janko Mrkvička",
//     vek: 30,
//     bio: "Lorem ipsum dolor sit amet",
//     valid: true
// };

const mapErrors = (errors: object) => (
    Object.entries(errors).map(
        ([id, error]) => (
            <a href={`#${id}`}>{error.message}</a>
        )
    )
);

const Error = ({ children }: { children?: { message?: string } }) => (
    children ? <ErrorMessage>{children.message}</ErrorMessage> : null
)


const App = () => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema,
        // defaultValues,
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Header>Sčítanie ľudu 2021</Header>
            <Container>
                <PhaseBanner tag="Verzia 0.0.1">Toto je len falošná stránka na sčítanie. Slúži len na testovanie ID-SK, nič viac.</PhaseBanner>
            </Container>
            <Container>
                <BackLink />

                <Content>
                    <ErrorSummary errors={mapErrors(errors)} />

                    <Caption size="xl">Keďže štát rád špehuje, tak...</Caption>
                    <Heading size="xl">Budete sčítaný!</Heading>

                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <FormGroup id="meno" hasError={!!errors.meno}>
                            <Label htmlFor="meno-value">Meno a priezvisko</Label>
                            <Hint>Zadávajte len Vaše oficiálne meno, žiadne prezývky.</Hint>
                            <Error>{errors.meno}</Error>
                            <Input
                                ref={register}
                                id="meno-value"
                                name="meno"
                                hasError={!!errors.meno}
                                width={30}
                                autoComplete="name"
                            />
                        </FormGroup>

                        <FormGroup id="vek" hasError={!!errors.vek}>
                            <Label htmlFor="vek-value">Vek</Label>
                            <Hint>Zadávajte len vek v celých číslach. Nikto nemá vek "35 a 3/4".</Hint>
                            <Error>{errors.vek}</Error>
                            <Input
                                ref={register}
                                id="vek-value"
                                name="vek"
                                hasError={!!errors.vek}
                                width={2}
                                autoComplete="off"
                            />
                        </FormGroup>

                        <FormGroup id="bio" hasError={!!errors.bio}>
                            <Label htmlFor="bio-value">Krátka biografia</Label>
                            <Hint>Začnite Vašou prvou spomienkou...</Hint>
                            <Error>{errors.bio}</Error>
                            <TextArea
                                ref={register({ required: true, minLength: 100 })}
                                id="bio-value"
                                name="bio"
                                hasError={!!errors.bio}
                                rows={5}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Fieldset legend="Aká je Vaša národnosť?">
                                <Error>{errors.nationality}</Error>
                                <Checkboxes>
                                    <Checkbox ref={register} name="nationality.0" value="slovak">slovenská</Checkbox>
                                    <Checkbox ref={register} name="nationality.1" value="magyar">maďarská</Checkbox>
                                    <Checkbox ref={register} name="nationality.2" value="other">iná</Checkbox>
                                </Checkboxes>
                            </Fieldset>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="pet">Fotka Vášho domáceho miláčika</Label>
                            <Hint>Obrázky vo formáte JPEG a PNG. Maximálne 1MB.</Hint>
                            <Error>{errors.pet}</Error>
                            <FileUpload ref={register} id="pet" name="pet" />
                        </FormGroup>

                        <FormGroup id="valid" hasError={!!errors.valid}>
                            <Fieldset legend="Sú vaše osobné údaje správne a aktuálne?">
                                <Error>{errors.valid}</Error>
                                <Radios>
                                    <Radio ref={register} name="valid" value="true">
                                        Áno, moje osobné údaje sú správne
                                    </Radio>
                                    <Radio ref={register} name="valid" value="false">
                                        Nie, niektoré údaje sú nesprávne alebo sa zmenili
                                    </Radio>
                                </Radios>
                            </Fieldset>
                        </FormGroup>

                        <Button>Odoslať</Button>

                    </Form>
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default App;