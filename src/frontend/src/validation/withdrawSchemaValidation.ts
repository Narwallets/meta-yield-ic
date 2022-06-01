import * as Yup from "yup";

const withdrawSchemaValidation = Yup.object().shape({
    amount_withdraw: Yup.number()
    .required("The amount to withdraw is required")
    .moreThan(0, 'The amount to withdraw must be greater than 0')
    // .max(Yup.ref("supporterDeposited"))
});
export default withdrawSchemaValidation;

