import { Switch as SwitchBase } from 'react-aria-components';
import "./Switch.styles.css"

interface SwitchProps {
  label: string
}
function Switch({ label } : SwitchProps ) {
  return (
    <SwitchBase>
      <div className="indicator">
        <div className="button" />
      </div>
      {label}
    </SwitchBase>
  );
}

export default Switch