/* 
export type model = "notEmpty" | "asdasd";

const errors: Record<model, { msg: string }> = {
  notEmpty: {
    msg: " shouldn't be empty",
  },
  asdasd: {
    msg: "asdasdas",
  },
};

export function validate(type: model[]) {
  let data = type.forEach((x) => {
    return { [x]: errors[x] };
  });
  return { validate: {} };
}
 */