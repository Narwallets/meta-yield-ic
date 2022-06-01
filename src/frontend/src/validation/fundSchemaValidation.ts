import * as Yup from "yup";

const fundSchemaValidation = Yup.object().shape({
  amount_deposit: Yup.number().max(
    Yup.ref("balance"),
    `You dont have enough stICP.`
  ),
});

export default fundSchemaValidation;
