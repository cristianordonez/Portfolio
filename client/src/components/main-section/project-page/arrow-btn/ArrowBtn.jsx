import IconButton from '@mui/material/IconButton';
import './ArrowBtn.scss';

export default function ArrowBtn({ classname, clickHandler, Icon }) {
   return (
      <div className={classname}>
         <IconButton onClick={clickHandler} color='secondary'>
            <Icon />
         </IconButton>
      </div>
   );
}
