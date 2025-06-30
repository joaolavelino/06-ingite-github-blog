export const markdownContent = `## React Hook Form

Lib documentation: https://react-hook-form.com/get-started

### 1 - Start the useForm hook

Destruct the returning object of the hook \`useForm\` to get our methods and variables from the library. This hook creates a 'new form' that can interact with the DOM and provides the tools for this integration.

### 2 - Integrate the form inputs with the form

Use the \`register()\` from RHF as a function brought by the rest operator on the props.

\`\`\`tsx
{...register('task')}
\`\`\`

It's possible to send other settings for the input as an object. TS intellisense will suggest the possible settings. One of those is the format setters.

\`\`\`tsx
{...register('task', { valueAsNumber: true })}
\`\`\`

This function sets a new input inside the form created by RHF. It gets the name on the form as a prop. It's used as a spread operator, because it returns a series of parameters for the input. If they need a value, it will be the name of the input, passed as a parameter.

### 3 - Submit function

Inside the tag \`form\`, on the \`onSubmit\` parameter, pass the \`handleSubmit\` function imported with the \`useForm()\` hook. As an argument of this function, pass the actual submit function you created.

\`\`\`tsx
<form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
\`\`\`

On the submit function, you can pass the data received from the form to be handled by the function. The data will be an object and the keys will be the names given on the \`register\` function on the inputs.

\`\`\`tsx
function handleCreateNewCycle(data) {
    ...
}
\`\`\`

### 4 - Data Types:

Create an interface for the form data with the information format that the form will gather:

\`\`\`ts
interface newCycleFormData {
  task: string;
  taskMinutesAmount: number;
}
\`\`\`

It's possible to create this interface automatically from the validation scheme. To do so, create a new \`Type\` (in this case, use type instead of interface, because it's created from data from other sources) using \`zod.infer\` and send the schema as a generic (remember to use typeof). This allows more conformity of the form information. As a new key is added on the scheme, the form will automatically expect this information.

\`\`\`ts
const newCycleFormSchema = zod.object({
  task: zod.string().min(1, "Informe o nome da tarefa"),
  taskMinutesAmount: zod
    .number()
    .min(5, "O ciclo deve ter no mínimo 5 minutos")
    .max(60, "O ciclo deve ter no máximo 60 minutos"),
});

type newCycleFormData = zod.infer<typeof newCycleFormSchema>;
\`\`\`

Assign this format on the \`useForm\` hook as a generic just after the hook name:

\`\`\`tsx
const { register, handleSubmit, watch } = useForm<newCycleFormData>();
\`\`\`

Assign this format to the \`data\` argument on the submit function:

\`\`\`tsx
function handleCreateNewCycle(data: newCycleFormData) {
  console.log(data);
}
\`\`\`

### 5 - Set the initial values for the form

NOTE: This is particularly useful on update forms

It's possible to send different settings as an object on the useForm hook call argument. One of those is the default values. The value of this setting is an object with the initial values of each input. The hook call will be like this:

\`\`\`tsx
const { register, handleSubmit, watch } = useForm<newCycleFormData>({
  defaultValues: { task: "", taskMinutesAmount: 0 },
});
\`\`\`

### 6 - Reset a form:

It's possible to get a reset form function from the useForm hook call.

\`\`\`tsx
const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
  defaultValues: { task: "", taskMinutesAmount: 0 },
});

function handleCreateNewCycle(data: newCycleFormData) {
  console.log(data);
  reset();
}
\`\`\`

This function will restore the default values of the form (set as an argument on the useForm hook call). It's possible to call this function anywhere. So creating a reset button for the form is very simple.

### 7 - Form Provider

If you need to pass the functions from RHF into different components, RHF provides (pun intended) a context provider. To use this FormProvider, it's needed to store the useForm() into a variable.

\`\`\`tsx
const newCycleForm = useForm<newCycleFormData>({...});

const { handleSubmit, watch, reset } = newCycleForm;
<FormProvider {...newCycleForm}>
  <NewCycleForm />
</FormProvider>;
\`\`\`

Then, inside the child component, just call the context provided (pun intended, again) by RHF:

\`\`\`tsx
const { register } = useFormContext();
\`\`\`

## Zod - Form Validation

### 1 - Install Zod and the Hook Form Resolver

\`npm i zod\`
Zod documentation: https://zod.dev/

\`npm i @hookform/resolvers\` - This will allow integration between RHF and validation libraries.

### 2 - Import items on the form component

On the form component, import the zod resolver: \`import {zodResolver} from "@hookform/resolvers/zod"\`

### 3 - useForm hook setup

Pass an object with the resolver as an argument of \`useForm\` hook. The value is the \`zodResolver\` function imported from @hookform/resolvers. The argument of this function is the validation schema.

\`\`\`tsx
const { register, handleSubmit, watch } = useForm<newCycleFormData>({
  defaultValues: { task: "", taskMinutesAmount: 0 },
  resolver: zodResolver(newCycleFormSchema),
});
\`\`\`

### 4 - Create a schema

NOTE: This can be done on a separate validation file on the component folder

Import zod on the form - \`import * as zod from 'zod'\`

Create a validation schema using what we imported from \`zod\`. This schema will validate the data sent by the submit function (on the data argument).

\`\`\`tsx
const newCycleFormSchema = zod.object({
  task: zod.string().min(1, "Informe o nome da tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo deve ter no mínimo 5 minutos")
    .max(60, "O ciclo deve ter no máximo 60 minutos"),
});
\`\`\`

### 5 - Display the errors

To do so, get \`formState\` from the \`useForm\` hook. This will display the validation errors from the form. The useForm hook call will be something like:

\`\`\`tsx
const { register, handleSubmit, watch, formState } = useForm({
  resolver: zodResolver(newCycleFormSchema),
});
\`\`\`

It's possible to use the error messages (even send it to other components such as the input or toasts) using the formState variable:

\`\`\`ts
console.log(formState.errors[--keyName--]);
\`\`\``;
