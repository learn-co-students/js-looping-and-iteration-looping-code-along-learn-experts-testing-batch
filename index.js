const writeCards = (names, giftType) => {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
  }
  return messages;
}

const countdown = number => {
  while (number >= 0) {
    console.log(number--);
  }
}