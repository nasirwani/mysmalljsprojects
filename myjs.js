let mybtn=document.getElementById('btn');
let quotesarr=[

    'The greatest glory in living lies not in never falling but in rising every time we fall. -Nelson Mandela',
'The way to get started is to quit talking and begin doing. -Walt Disney',
'Your time is limited, so dont waste it living someone else life Dont be trapped by dogma  which is living with the results of other peoples thinking. -Steve Jobs',
'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
'If you look at what you have in life, you ll always have more If you look at what you dont have in life, youll never have enough Oprah Winfrey',
'If you set your goals ridiculously high and its a failure, you will fail above everyone else s success. -James Cameron',
'Life is what happens when you re busy making other plans. -John Lennon',
'Spread love everywhere you go. Let no one ever come to you without leaving happierMother Teresa',
'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
'Whoever is happy will make others happy too. -Anne Frank',
'Do not go where the path may lead  go instead where there is no path and leave a trail Ralph Waldo Emerson',
'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
'Dont judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson',
'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller',
'It is during our darkest moments that we must focus to see the light. -Aristotle',
'Whoever is happy will make others happy too. -Anne Frank',
'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
]
myoutputquote=document.getElementById('quote')
mybtn.addEventListener('click',function(){
    let generate=quotesarr[Math.floor(Math.random()*quotesarr.length)]
    myoutputquote.innerHTML=generate;
})