const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  let result;
  switch (operation) {
    case 'add': result = a + b; break;
    case 'sub': result = a - b; break;
    case 'mul': result = a * b; break;
    case 'div':
      if (b === 0) return res.status(400).json({ error: "Division by zero" });
      result = a / b; break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Serverrr running on port ${PORT}`);
});
