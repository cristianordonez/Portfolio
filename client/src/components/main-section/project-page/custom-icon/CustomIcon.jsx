import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './CustomIcon.scss';

export default function CustomIcon({ title, label, href, Icon }) {
   return (
      <Tooltip title={title}>
         <IconButton
            aria-label={label}
            target='_blank'
            href={href}
            className='icon-button'
            size='large'
         >
            <Icon color='secondary' />
         </IconButton>
      </Tooltip>
   );
}
