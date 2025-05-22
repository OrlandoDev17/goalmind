import RemenberMe from './RemenberMe';

interface FormFieldsProps {
  label: string;
  placeholder: string;
  inputType: string;
  id: string;
  type?: 'login' | 'register';
}

const FORM_FIELDS: FormFieldsProps[] = [
  {
    label: 'Nombre Completo',
    placeholder: 'Orlando López',
    inputType: 'text',
    id: 'name-form',
    type: 'register',
  },
  {
    label: 'Email',
    placeholder: 'tu@email.com',
    inputType: 'email',
    id: 'email-form',
  },
  {
    label: 'Contraseña',
    placeholder: '••••••••',
    inputType: 'password',
    id: 'password-form',
  },
];

export default function AuthForm({ type }: { type: 'login' | 'register' }) {
  return (
    <form className="flex flex-col gap-4">
      {FORM_FIELDS.filter(
        ({ type: fieldType }) => !fieldType || fieldType === type
      ).map(({ label, placeholder, inputType, id }: FormFieldsProps) => (
        <div className="flex flex-col gap-2" key={id}>
          <label className="font-semibold text-lg" htmlFor={id}>
            {label}
          </label>
          <input
            className="outline-0 border-2 border-zinc-200 p-2 rounded-md"
            type={inputType}
            id={id}
            placeholder={placeholder}
          />
        </div>
      ))}
      {type === 'login' && <RemenberMe />}
    </form>
  );
}
