export const index = async (req, res) => {

  res.render('layout', { 
    content: 'home',
    title: 'Home'
  });

};