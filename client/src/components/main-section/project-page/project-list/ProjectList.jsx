import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, {
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from 'react';
import { getProjectNavIndexes } from '../../../../utils/utils';
import ArrowBtn from '../arrow-btn/ArrowBtn.jsx';
import ProjectListItem from '../project-list-item/ProjectListItem.jsx';
import ProjectNavRow from '../project-nav-row/ProjectNavRow.jsx';
import './ProjectList.scss';

export default function ProjectList({ isVisible }) {
   const [repos, setRepos] = useState([]);
   const [scrollPosition, setScrollPosition] = useState(0);
   const [showBtnRight, setShowBtnRight] = useState(true);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [imageWidth, setImageWidth] = useState(0);
   const sliderRef = useRef(null);
   const imageWidthRef = useRef();
   imageWidthRef.current = imageWidth;

   useEffect(() => {
      axios
         .get(`${__API__}/repos`)
         .then((repos) => {
            setRepos(repos.data);
         })
         .catch((err) => {
            console.log(err.response);
         });
   }, []);

   const handleSlideRight = useCallback(() => {
      if (currentIndex < repos.length - 1) {
         setCurrentIndex(currentIndex + 1);
      }
      if (sliderRef.current) {
         let currentPosition =
            sliderRef.current.scrollLeft + (imageWidthRef.current + 10);
         sliderRef.current.scrollLeft = currentPosition;
         setScrollPosition(currentPosition);
         const maxPosition =
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
         if (currentPosition >= maxPosition) {
            setShowBtnRight(false);
         }
      }
   }, [imageWidthRef, repos, currentIndex]);

   const handleSlideLeft = useCallback(() => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      }
      setShowBtnRight(true);
      if (sliderRef.current) {
         let currentPosition =
            sliderRef.current.scrollLeft - (imageWidthRef.current + 10);
         sliderRef.current.scrollLeft = currentPosition;
         currentPosition < 0
            ? setScrollPosition(0)
            : setScrollPosition(currentPosition);
      }
   }, [imageWidthRef, repos, currentIndex]);

   const currentClass = isVisible ? 'animate-projects' : '';

   const counts = useMemo(() => {
      let result = [];
      for (let i = 0; i < repos.length; i++) {
         result.push(getProjectNavIndexes(i));
      }
      return result;
   }, [repos]);

   return (
      <div className='project-list'>
         <Typography variant='h2' className='section-title'>
            Projects
         </Typography>
         <Typography
            variant='body1'
            sx={{ paddingBottom: '2rem', textAlign: 'center' }}
         >
            Here are some of the projects I have worked on. Check out my&nbsp;
            <Link color='secondary' href='https://github.com/cristianordonez'>
               GitHub
            </Link>{' '}
            to see more.
         </Typography>
         <ProjectNavRow counts={counts} currentIndex={currentIndex} />
         <div
            id='outer-container'
            className={currentClass}
            data-testid='project-list'
         >
            <ArrowBtn
               clickHandler={handleSlideLeft}
               Icon={ArrowBackIosIcon}
               classname={
                  scrollPosition === 0
                     ? 'slider-arrow-disabled'
                     : 'slider-arrow'
               }
            />

            <div className='slider' ref={sliderRef}>
               <div className='slider-contents'>
                  {repos.map((repo) => (
                     <div className='slider-card' key={repo._id}>
                        <ProjectListItem
                           name={repo.name}
                           image={repo.openGraphImageUrl}
                           description={repo.description}
                           homepageUrl={repo.homepageUrl}
                           githubUrl={repo.url}
                           setImageWidth={setImageWidth}
                        />
                     </div>
                  ))}
               </div>
            </div>
            <ArrowBtn
               classname={
                  showBtnRight ? 'slider-arrow' : 'slider-arrow-disabled'
               }
               clickHandler={handleSlideRight}
               Icon={ArrowForwardIosIcon}
            />
         </div>
      </div>
   );
}
