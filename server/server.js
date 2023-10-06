const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

// Use JSON for request and response data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the root page!');
  });

// 우리가 할 건, 유저가 채팅 친 걸 받아서 AI의 응답을 들려주는 것.
app.get('/chat', (req, res) => {
//   const userInput = req.body.message;
//   let aiAnswer = '';
  
// if (userInput.includes('안녕')) {
//     aiAnswer = '안녕하세요! 반갑습니다.';
//   } else if (userInput.includes('노트북')) {
//     aiAnswer = '맥북을 추천합니다';
//   }

//   res.json({ message: aiAnswer });
    res.send("안녕하세요! 반갑습니다.")
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

