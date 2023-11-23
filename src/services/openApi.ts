import OpenAI from "openai";

const getOpenAPIResponse = async (instructions: string, prompt: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
    organization: process.env.OPEN_AI_ORG_KEY,
  });

  //   const myAssistant = await openai.beta.assistants.create({
  //     instructions,
  //     name: "SE-OH-MY-ASSISTANT",
  //     model: "gpt-4",
  //   });

  //   console.log(myAssistant);

  const assistantId = `asst_bUv5dfBiWnjBbYmynAmRWthk`;
  const newThread = await openai.beta.threads.create();
  console.log('newThread', newThread);

  const threadMessages = await openai.beta.threads.messages.create(
    newThread.id,
    { role: "user", content: prompt }
  );

  console.log(threadMessages);

  const run = await openai.beta.threads.runs.create(newThread.id, {
    assistant_id: assistantId,
  });

  console.log(run);

  const isRunComplete = async () => {
    const runStatus = await openai.beta.threads.runs.retrieve(
        newThread.id,
      run.id
    );

    console.log(runStatus);

    return runStatus.status === "completed";
  };

  await asyncInterval(isRunComplete, 1000);

  const messages = await openai.beta.threads.messages.list(
    newThread.id
  );
  console.log('messages', messages);


  return (messages.data[0].content[0] as any).text.value;
};

const asyncInterval = async (
  callback: () => Promise<boolean>,
  ms: number,
  triesLeft = 60
) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      if (await callback()) {
        resolve(true);
        clearInterval(interval);
      } else if (triesLeft <= 1) {
        reject('took to long');
        clearInterval(interval);
      }
      triesLeft--;
    }, ms);
  });
};

export default getOpenAPIResponse;
