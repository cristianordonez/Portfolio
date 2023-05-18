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
   const [showBtnLeft, setShowBtnLeft] = useState(false);
   const [showBtnRight, setShowBtnRight] = useState(true);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [maxWidth, setMaxWidth] = useState(0);
   const [imageWidth, setImageWidth] = useState(0);
   const sliderRef = useRef(null);
   const imageWidthRef = useRef();
   imageWidthRef.current = imageWidth;

   useEffect(() => {
      if (sliderRef.current) {
         const maxWidth =
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
         setMaxWidth(maxWidth);
      }
   }, [sliderRef.current]);

   useEffect(() => {
      axios
         .get(`${__API__}/repos`)
         .then((repos) => {
            // !change this back
            // setRepos(repos.data);
            let test = [];
            for (let i = 0; i < repos.data.length; i++) {
               test.push(repos.data[i]);
               test.push(repos.data[i]);
            }
            console.log('test: ', test);
            setRepos(test);
         })
         .catch((err) => {
            console.log(err.response);
         });
   }, []);

   // handles moving visible project on arrow right press and updating index
   const handleSlideRight = useCallback(() => {
      if (sliderRef.current) {
         let currentPosition =
            sliderRef.current.scrollLeft + (imageWidthRef.current + 20);
         sliderRef.current.scrollLeft = currentPosition;
      }
   }, [imageWidthRef, repos, currentIndex]);

   // handles moving visible project on arrow left press and updating index
   const handleSlideLeft = useCallback(() => {
      if (sliderRef.current) {
         let currentPosition =
            sliderRef.current.scrollLeft - (imageWidthRef.current + 20);
         sliderRef.current.scrollLeft = currentPosition;
      }
   }, [imageWidthRef, repos, currentIndex]);

   // animation for project list when it enters viewport
   const currentClass = isVisible ? 'animate-projects' : '';

   // updates visibility of left and right arrow buttons based on scroll position
   const handleShowBtns = (currentPosition) => {
      console.log('currentPosition in handle show btns: ', currentPosition);
      console.log('maxWidth: ', maxWidth);
      if (currentPosition > 0) {
         setShowBtnLeft(true);
      } else {
         setShowBtnLeft(false);
      }
      if (currentPosition >= maxWidth) {
         setShowBtnRight(false);
      } else {
         setShowBtnRight(true);
      }
   };

   const handleUpdateIndex = (currentPosition) => {};

   // creates the index titles used in project-nav-row
   const counts = useMemo(() => {
      let result = [];
      for (let i = 0; i < repos.length; i++) {
         result.push(getProjectNavIndexes(i));
      }
      return result;
   }, [repos]);

   // will be called anytime scroll is recognized on div
   // todo this will be called on ALL scrolls to update index and buttons
   const handleScroll = useCallback(() => {
      const currentPosition = sliderRef.current.scrollLeft;
      console.log('currentPosition: ', currentPosition);
      handleUpdateIndex(currentPosition);
      handleShowBtns(currentPosition);
   }, [imageWidth]);

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
                  showBtnLeft ? 'slider-arrow' : 'slider-arrow-disabled'
               }
            />
            <div className='slider' ref={sliderRef} onScroll={handleScroll}>
               <div className='slider-contents'>
                  {repos.map((repo, index) => (
                     <div className='slider-card' key={index}>
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
