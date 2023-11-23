export interface InterestArea {
  urlSlug: string;
  heading: string;
  subHeading: string;
  introduction: string;
  image: {
    src: string;
    caption: string;
  };
  banner: string;
  metaTitle: string;
  metaDescription: string;
  imagePrompt: string;
}

const interestAreas: InterestArea[] = [
  {
    urlSlug: "business",
    heading: "Business",
    subHeading:
      "Discover how you can get into a business course, no matter your academic history",
    introduction: `Want to break into the corporate world, but don't have a strong study background? We can help you enrol in online business courses, even if you don’t have the right ATAR or study experience. These study options are designed to ease you into university life, and cover essential topics like finance, marketing, leadership and technology. You’ll earn the industry skills you need to explore entry-level jobs or enrol in a higher business degree.

    All courses are delivered 100% online by universities from across Australia. This means that while you’ll gain entry through us, you will study directly with the university of your choice.`,
    image: {
      src: "https://www.open.edu.au/api/cms-image?name=/-/media/blog/2019/10-oct/business-student-daniel-may-franks-in-front-of-woven-wall.ashx&w=3840&ts=1700612924617&q=90",
      caption:
        "Daniel studied business with Griffith University through Open Universities Australia",
    },
    banner:
      `https://www.open.edu.au/api/cms-image?name=/-/media/study-online/2023/level-2-study-online-pages/finance/finance---study-online-banner.ashx&w=1920&ts=1700612924617&q=90`,
    metaTitle: "Business",
    metaDescription: "Business",
    imagePrompt: "Generate a photo that looks like a stock photo about business and management. It should have at least one person in the photo who looks like a business professional.",
  },
  {
    urlSlug: "primary-education",
    heading: "Primary education",
    subHeading:
      "Inspire future generations to love learning with a primary school teacher course",
    introduction: `Do you want to teach young children during their first years at school—and make a lasting impression on their lives?

    Open Universities Australia can help you find the pathway into primary school teaching that suits you best, whether you want to start small without entry requirements, or dive straight into an accredited primary education degree. 
    
    Start below to compare online primary teaching courses from leading universities. When you study your course online through us, you get to explore teaching theories from home, while completing essential professional placements at real primary schools. 
    
    We’re here to answer any questions you may have about your study choices. We can also guide you every step of the way through your enrolment, so you don’t have to navigate the complex world of university administration on your own.`,
    image: {
      src: "https://www.open.edu.au/api/cms-image?name=/-/media/blog/2019/07-jul/education-primary-education-student-alison-kettle-.ashx&w=3840&ts=1700612924617&q=90",
      caption:
        "Ally studied primary education with Curtin University, through Open Universities Australia",
    },
    banner:
      `https://www.open.edu.au/api/cms-image?name=/-/media/images/headers/study-primary-education-online.ashx&w=640&ts=1700612924617&q=90`,
    metaTitle: "Education",
    metaDescription: "Education",
    imagePrompt: "Photograph of a smiling teacher gesturing towards a blackboard with an equation on it in a classroom. The classroom is full of happy, diverse and attentive elementary school children who are sitting at their desks and listening to the teacher, decorated with educational posters and student artwork",
  },
  {
    urlSlug: "psychology",
    heading: "Psychology",
    subHeading:
      "Unpack mental processes and human behaviour",
    introduction: `Get food for thought when you study psychology. Help people understand their thinking, navigate their feelings and choices in a way that changes lives for the better.

    Specialise in a variety of areas including clinical, organisational or educational psychology or upskill in human resources, research, user experience or social welfare.`,
    image: {
      src: "https://www.open.edu.au/api/cms-image?name=/-/media/images/your-career/career-pages/psychologist-david.ashx&w=1200&ts=1700612924617&q=90",
      caption:
        "David studied a Bachelor of Behavioural Studies with Swinburne University, through Open Universities Australia",
    },
    banner:
      `https://www.open.edu.au/api/cms-image?name=/-/media/psychology-banner-generic/study-online-l2-banner---psychology.ashx&w=640&ts=1700612924617&q=90`,
    metaTitle: "Psychology",
    metaDescription: "Psychology",
    imagePrompt: "Create an image that features a woman as a psychologist, holding a notebook and pen, in a relaxed and warmly lit therapy session setting.",
  }

];

export default interestAreas;
