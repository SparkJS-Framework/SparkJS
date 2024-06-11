export const helpIndex = async (req, res) => {

    res.render('layout', { 
      content: 'help/index',
      title: 'Help Center'
    });
  
  };