import { Switch as SwitchBase } from '@mui/base/Switch';
import { Root } from './Switch.styles';

interface SwitchProps {
  label: string
  disabled?: boolean
}
function Switch({ label, disabled } : SwitchProps ) {
  
  const slotLabel = { slotProps: { input: { 'aria-label': label } } };

  return (
    <div>
      <SwitchBase
        slots={{
          root: Root,
        }}
        {...slotLabel}
        disabled={disabled}
      />
      {label}
    </div>
  )
}

export default Switch
