const app = require('./config.js');


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = (process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
