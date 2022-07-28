import React from 'react';
import { useForm } from 'react-hook-form';
import "./Circulars.css"
const Circulars = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <div>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" placeholder="job title" defaultValue="test" className='border mb-5 input input-bordered input-secondary w-full max-w-xs' {...register("example")} />
                {/* include validation with required or other standard HTML validation rules */}
                <br></br>
                <input type="text" placeholder='job type' className='input  input-bordered mb-5 input-secondary w-full max-w-xs' {...register("exampleRequired", { required: true })} />
                <br></br>
                <input type="text" placeholder='institution' className='input  input-bordered mb-5 input-secondary w-full max-w-xs' {...register("exampleRequired", { required: true })} />
                <br></br>
                <textarea type="text" placeholder='job description' className='input h-40 input-bordered mb-5 input-secondary w-full max-w-xs' {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                <br></br>
                {errors.exampleRequired && <span>This field is required</span>}
                <br></br>
                <input className='btn bg-primary text-base-100 hover:bg-primary' type="submit" />
            </form>
        </div>
    );
};

export default Circulars;