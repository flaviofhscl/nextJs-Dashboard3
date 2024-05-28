import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

import FormEmitir from '@/app/ui/notas/form-emitir';

 
export default async function Page() {

 
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Nota Fiscal', href: '/notas/emissao' },
          {
            label: 'Emissão de nota Fiscal',
            href: '/notas/emissao',
            active: true,
          },
        ]}
      />
      <FormEmitir />
    </>
  );
}