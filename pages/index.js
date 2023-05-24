import { useRouter } from 'next/router';
export default function Home(){
  const router = useRouter();


  return (
  <div>
    
    <h1> 
      { router.query.name
      ? `hello,${router.query.name}`
      : "I don't know your name"}
    </h1>
    </div>
  );
  
}
