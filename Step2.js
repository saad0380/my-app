import React from "react";
import { useForm } from "react-hook-form";
import { withRouter,} from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import UpdateAction from "./UpdateAction";

const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ UpdateAction });
  const onSubmit = (data) => {
    actions.UpdateAction(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input {...register("age")} defaultValue={state.age} />
      </label>
      <label>
        Years of experience:
        <input {...register("yearsOfExp")} defaultValue={state.yearsOfExp} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step2);
