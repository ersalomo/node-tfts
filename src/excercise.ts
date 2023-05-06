// const doTraining = async (model: tf.Sequential) => {
//   const history = await model.fit(xs, ys, {
//     epochs: 500,
//     callbacks: {
//       onEpochEnd: async (epochs, logs) => {
//         console.log(`Epochs ${epochs} logs ${logs?.loss}`);
//       },
//     },
//   });
// };

// const model = tf.sequential();

// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// model.compile({
//   loss: 'meanSquaredError',
//   optimizer: 'sgd',
// });
// model.summary();

// const xs = tf.tensor2d([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], [6, 1]);
// const ys = tf.tensor2d([-3.0, -1.0, 2.0, 3.0, 5.0, 7.0], [6, 1]);
// doTraining(model).then(() => {
//   console.log(model.predict(tf.tensor2d([10], [1, 1])));
// });

// const csvUrl = '../data/data.csv';
// const trainingData = tf.data.csv(csvUrl, {
//   columnConfigs: {
//     species: {
//       isLabel: true,
//     },
//   },
// });
// console.log(trainingData);
// const convertedData = trainingData
//   .map(({ xs, ys }) => {
//     const labels = [
//       ys.species == 'setosa' ? 1 : 0,
//       ys.species == 'verginica' ? 1 : 0,
//       ys.species == 'versicolor' ? 1 : 0,
//     ];

//     return {
//       xs: Object.values(xs),
//       ys: Object.values(labels),
//     };
//   })
//   .batch(10);
