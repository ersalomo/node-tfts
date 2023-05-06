import * as tf from '@tensorflow/tfjs';

const run = async () => {
  // const trainingUrl = './data/train.csv';
  const trainingUrl = `https://raw.githubusercontent.com/https-deeplearning-ai/tensorflow-2-public/main/C1_Browser-based-TF-JS/W1/assignment/data/wdbc-train.csv`;

  const trainingData = tf.data.csv(trainingUrl, {
    columnConfigs: {
      diagnosis: {
        isLabel: true,
      },
    },
  });
  console.log(trainingData.toArray());
  // const convertedData = await trainingData.map(({ xs, ys }) => {
  //   return {
  //     xs: Object.values(xs),
  //     ys: [ys.diagnosis],
  //   };
  // });

  // const convertedTrainingData = trainingData.map(({ xs, ys }) => {
  //   const labels = [];
  // });
};

export { run };
