var history = [
    // 第一個動作前
    {
      squares: [
        null, null, null,
        null, null, null,
        null, null, null,
      ]
    },
    // 第一個動作後
    {
      squares: [
        null, null, null,
        null, 'X', null,
        null, null, null,
      ]
    },
    // 第二個動作後
    {
      squares: [
        null, null, null,
        null, 'X', null,
        null, null, 'O',
      ]
    },
    // ...
  ]

console.log(history)