import Image from 'next/image';



export default function sefLogo() {
  return (
    <div className={`flex flex-row items-center leading-none`}>
    <Image src="/sef/logo_sef.svg" alt="SEF Logo" 
      width={600}
      height={350}
    />
    
  </div>
  );
}