exports.resources = [
  {
    title: 'string',
    description: 'A set of characters that are either constant or a variable. Make sure to include quotations around your string.',
    code: 'print “hi my name is”\nname = “kiwi compute',
  },
  {
    title: 'variable',
    description: 'A place to store information. Make sure to use a different name for each variable. You can then reference this variable in your code later.',
    code: 'name = “kiwi compute”\nprint name',
  },
  {
    title: 'print',
    description: 'To print, make sure you include a quotation or single quote on either side of your text. If you’re printing numbers, you don’t need these. See correct formats below.',
    code: 'print “hi”print\n‘hi’print\n7 * 8',
  },
  {
    title: 'raw_input()',
    description: 'Requests the user’sanswer to a question. It is important that you set it equal to something, so you can use the answer later. To get the user’s answer, you can print it or use it in a sentence. You don’t need quotations around the answer. See correct formats below.',
    code: 'answer = raw_input()\nprint answer\nprint “your answer is” + answer',
  },
  {
    title: 'conditional statement',
    description: 'These take the user’s input from raw_input() and goes to different pieces of code based on their answer. Make sure you have the colon (:), two equal signs (==) and the correct tabs. The format is if -> elif -> else. See next section below for descriptions of each.',
    code: 'answer = raw_input()\nif answer == yes:\n    print “hi”\nelif answer == “no”:\n    print “I don’tlike this.”else:\n    print “try again”',
  },
  {
    title: 'elif',
    description: 'elif stands for “else if”. This is a second check for the user’s input. If the answer doesn’t match the “if” statement, it will move to “elif.” You can have as many elif’s as needed, but make sure you include the right format for all.',
    code: 'elif answer == “no”:\n    print “I don’t like this',
  },
  {
    title: 'else',
    description: 'else the last piece to your conditional statement. If the answer doesn’t match your “if” or “elif”, it will go to else. Make sure you include a colon and a tab.',
    code: 'else:\n    print “I don’t like this”',
  },
  {
    title: 'list',
    description: 'list a place to store things that are in order from first to last.',
    code: 'hairs = [‘brown’, ‘blond’, ‘red’]\ncount = [1, 2, 3, 4]\nprinthairs[1]',
  },
  {
    title: 'for loop',
    description: 'You can use lists in for loops. You repeat code for a specific and limited set of data. Typically you use lists with for loops.',
    code: 'for number in count:\n    print “This is the count %d”% number',
  },
  {
    title: 'while loop',
    description: 'The code under the while loop statement will continue repeating until false. For the example below, it will print numbers 1 until it reaches 10. Once it reaches 10, the statement is no longer true.',
    code: 'i = 1\nwhile i < 5:\n    print i\n    i = i + 1',
  },
  {
    title: '#',
    description: 'This is called commenting. If you put this in front of your code, it will ignore your code when running. You can also make notes in your code using this.',
    code: '# I like Bunnys',
  },
  {
    title: 'dictionary',
    description: 'A dictionary is a list of pairs with the structure like [key, value]. When you reference key, it will give you the value.',
    code: 'stuff ={‘name’: ‘kiwi’, ‘hair’: ‘brown’, ‘eyes’: ‘blue’}\nprint stuff [‘name’]',
  },
];
