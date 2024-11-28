import { useState } from "react";
import "./App.css";
import { useForm} from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors , isSubmitting},
  } = useForm()

  const Delay = (d) =>{
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        resolve();
      }, d * 1000 );
    })
  }

  const onSubmit = async(data) => {
    // await Delay(4);
    let r = await fetch("http://localhost:3000/" , {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)});
    let res = await r.text();
    console.log(data);
    console.log(res);
    // if(data.username !== "anwar") {
    //   setError("myform", {message:"your form is not good order"})
    // } 
  }
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label>username:</label>
          <input {...register("username" , {required:true, minLength:{value:3, message:"min length should be 3 character "}, maxLength:{value:10, message:"max length should be 10 character"}})} />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <label>password:</label>
          <input {...register("password" ,{required:true , minLength:{value:8, message:"min length should be 8 character"}})}  />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled = {isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
