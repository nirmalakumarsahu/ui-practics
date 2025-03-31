import { useCaptcha } from "../hooks/captcha.hook";
import { useChangeCase } from "../hooks/changecase.hook";

export function CustomHook() {
  const msg = useChangeCase("welCoMe to REACT");
  const captcha = useCaptcha();

  return (
    <div className="container-fluid">
      <h1>{msg}</h1>
      <h3>{captcha}</h3>
    </div>
  );
}
