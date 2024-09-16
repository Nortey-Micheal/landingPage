import './index.css';
import profile from './profile.jpg'
import blog from './images/blog-preview-card.png';
import recipe from './images/recipe-page3.png';
import rock from './images/ROCK_PAPER_SCISSORS.png';
import social from './images/social-links-profile.png';
import office from './images/office.jpg'

const img = document.querySelector('.skewed>div>div>img');
img.src = profile

const blog1 = document.querySelector('.works img:first-of-type');
blog1.src = blog
const recipe1 = document.querySelector('.works>div:nth-of-type(2)>img');
recipe1.src = recipe
const rock1 = document.querySelector('.works>div:nth-of-type(3)>img');
rock1.src = rock
const social1 = document.querySelector('.works>div:nth-of-type(4)>img');
social1.src = social

const office1 = document.querySelector('footer img')
office1.src = office