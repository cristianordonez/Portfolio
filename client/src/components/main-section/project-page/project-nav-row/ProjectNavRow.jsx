import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ProjectNavRow({ counts, currentIndex }) {
   return (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
         {counts.map((count, index) => (
            <Typography
               variant='subtitle2'
               key={count}
               color={currentIndex === index ? 'secondary' : 'text'}
            >
               {count}
            </Typography>
         ))}
      </Box>
   );
}
