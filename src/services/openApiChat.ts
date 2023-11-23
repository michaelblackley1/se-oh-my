import OpenAI from "openai";


const prompt = "Our current SEO content is in JSON format and is \"{\"subHeading\":\"Discover how you can get into a business course, no matter your academic history\",\"introduction\":\"Want to break into the corporate world, but don't have a strong study background? We can help you enrol in online business courses, even if you don’t have the right ATAR or study experience. These study options are designed to ease you into university life, and cover essential topics like finance, marketing, leadership and technology. You’ll earn the industry skills you need to explore entry-level jobs or enrol in a higher business degree.\\n\\n All courses are delivered 100% online by universities from across Australia. This means that while you’ll gain entry through us, you will study directly with the university of your choice.\",\"metaDescription\":\"Business\",\"metaTitle\":\"Business\"}\" These are the high ranking keywords: \"study business online, business degrees, business courses\" Re-write the subHeading, introduction, metaTitle and metaDescription using the high ranking keywords provided. I want the response in JSON format with the fields subHeading, introduction, metaTitle and metaDescription. Also generate an appropriate image and provide a URL to download it.";
const getApiChatCompletion = async (instructions: string, prompt: string) => {
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
        organization: process.env.OPEN_AI_ORG_KEY,
    });
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": instructions
        },
        {
          "role": "user",
          "content": prompt
        },
      ],
      temperature: 0.8,
      max_tokens: 5717,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: { type: "json_object" },
    });

    console.log('-------');
    console.log(completion.choices[0]);
    console.log(completion.choices[0].message.content);
    console.log('-------');

    return completion.choices[0].message.content;
};

export default getApiChatCompletion;