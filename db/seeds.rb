# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Jeff", last_name: "Peters", email: "jeff", gender: "male", birth_date: "1990/01/01", password: "password")
User.create(first_name: "Tupac", last_name: "Shakur", email: "tupac", gender: "male", birth_date: "1990/01/01", password: "password",
  profile_img_url: "https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/tupac-crop.jpg?itok=M8XT2jaK")
aaron = User.create(first_name: "Aaron", last_name: "Wayne", email: "niartenyaw", gender: "male", birth_date: "1990/01/01", password: "sweetawesome",
  profile_img_url: "https://avatars3.githubusercontent.com/u/8084693?s=460&v=4", bio: "Instructor @ AppAcademy. My hobbies include code golfing.", location: "San Francisco")
lavar = User.create(first_name: 'LaVar', last_name: "Ball", email: "lavar", gender: "male", birth_date: "1990/01/01", password: "password",
  profile_img_url: "https://www.gannett-cdn.com/-mm-/4bf92aed82a1a285ed5315752f3651cb0d637f53/c=222-10-1690-1968&r=537&c=0-0-534-712/local/-/media/2018/05/02/USATODAY/USATODAY/636608979313901154-C01-Lavar-Ball-95638829.JPG",
  cover_img_url: "https://www.ballerstatus.com/wp-content/uploads/2018/01/bbb1-780x520.jpg", bio: "Big Baller Brand CEO")
tom = User.create(first_name: "Myspace", last_name: "Tom", email: "tom", birth_date: "1990/01/01", gender: "male", password: "password", bio: "Myspace 4 life", profile_img_url: 'https://nasassocialmedia.com/wp-content/uploads/2016/08/1411087218778_wps_28_myspace_tom_8_Las_Vegas_A.jpg' )
User.create(first_name: 'Da', last_name: "Bear", email: "bear", birth_date: "1990/01/01", gender: "male", password: "password", bio: "the bear", profile_img_url: "https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/1/19/Space-042612-001-617x416.jpg/revision/latest?cb=20140902164930")
User.create(first_name: 'The', last_name: 'Sloth', email: "sloth", birth_date: "1990/01/01", gender: 'male', password: "password", bio: 'im lazy', profile_img_url: "https://a-z-animals.com/media/animals/images/original/sloth_9.jpg")
User.create(first_name: "Post", last_name: "Malone", email: "post", birth_date: "1990/01/01", gender: 'male', password: "password", bio: 'white iverson', profile_img_url: 'https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/tkxndk4gl61ruxtjqtyb/post-malone-siriusxm')
User.create(first_name: 'marsh', last_name: "mello", email: "marshmello", birth_date: "1990/01/01", gender: 'male', password: 'password', bio: 'i am so alone', profile_img_url: 'http://i0.wp.com/www.dailycal.org/assets/uploads/2017/01/Marshmello_Circle-Talent.Courtesy-900x580.jpg')
User.create(first_name: 'Klay', last_name: 'Thompson', email: 'klay', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://i.imgur.com/73CkWrm.png?1')
User.create(first_name: 'jeff', last_name: 'the killer', email: 'jeffery', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://vignette.wikia.nocookie.net/jtk/images/2/2c/Jeff_the_Killer.jpg/revision/latest?cb=20151230202544')
User.create(first_name: 'Drizzy', last_name: 'Drake', email: 'drake', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'http://thehollywoodunlocked.com/wp-content/uploads/2017/11/Swerves-of-2015-drake-hotline-bling.jpg', bio: 'not accepting new friends. i only love my bed and my moms, im sorry')
swaggy = User.create(first_name: 'Swaggy', last_name: 'P', email: 'swaggy', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/993/875/084.png',
  cover_img_url: 'https://i.ytimg.com/vi/6qXGBbSK5Y4/maxresdefault.jpg', bio: "you miss 100% of the shots that don't go in.")
ayy = User.create(first_name: 'Ayy', last_name: 'Lmao', email: 'ayy', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'http://i0.kym-cdn.com/entries/icons/mobile/000/014/178/AyyyLmao.jpg',
  cover_img_url: 'https://starecat.com/content/wp-content/uploads/alien-ayy-lmao-who-wants-to-be-a-millionaire.jpg', bio: 'ayy lmao')
mcd = User.create(first_name: 'Ronald', last_name: 'McDonald', email: 'mcd', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://vignette.wikia.nocookie.net/ronaldmcdonald/images/2/29/Ronald_McDonald_waving.jpg/revision/latest?cb=20150520002023',
  bio: 'The Official fuel for AppAcademy students', cover_img_url: 'https://media1.s-nbcnews.com/j/newscms/2016_48/1178653/chicken-mcnuggets-tease-today-161201_d180d8f523a3f90d22e433f3253e53d9.today-inline-large.jpg')
User.create(first_name: 'Penny', last_name: 'Wise', email: 'clown', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://images-na.ssl-images-amazon.com/images/I/41bpLECjbTL._SL1001_.jpg',
  bio: 'I eat children', cover_img_url: 'http://digitalspyuk.cdnds.net/17/38/980x490/landscape-1505731747-pennywise-teeth-it-movie.jpg')
fuzzy = User.create(first_name: 'Fuzzy', last_name: 'Wuzzy', email: 'fuzzy', birth_date: '1990/01/01', gender: 'female', password: 'password', profile_img_url: 'https://i.pinimg.com/originals/8d/4d/c2/8d4dc262b3787165087b434ee730a7a7.jpg',
  bio: 'im just a ball of buzz', cover_img_url: 'https://i.pinimg.com/originals/0d/02/6e/0d026e15b8c7fc105c620114003cd60e.jpg')
User.create(first_name: 'Car', last_name: 'Salesman', email: 'car', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'http://www.uvisor.com/wp-content/uploads/2017/01/ChZJNCrWwAE_Sf51.jpg',
  bio: 'lowballer certified. business is the only sport that is 24/7 365 days a year', cover_img_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--yBkqnOoh--/c_scale,f_auto,fl_progressive,q_80,w_800/188nduwtp1h0kjpg.jpg')
weeknd = User.create(first_name: 'The', last_name: 'Weeknd', email: 'weeknd', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://www.edmsauce.com/wp-content/uploads/2018/03/the-weeknd-good.png',
  bio: 'got a sweet asian chick, she go lo mein', cover_img_url: 'http://getwallpapers.com/wallpaper/full/7/3/3/66309.jpg')
tyrone = User.create(first_name: 'Im', last_name: 'Tyrone', email: 'tyrone', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://i.ytimg.com/vi/2oTTolojwng/maxresdefault.jpg',
  bio: 'im tyrone and smoking is bad for you')
carly = User.create(first_name: 'Carly Rae', last_name: 'Jepsen', email: 'carly', birth_date: '1990/01/01', gender: 'female', password: 'password', profile_img_url: 'https://static.spin.com/files/120706-cr-jepsen.png',
  bio: 'add me maybe?', cover_img_url: 'https://cdn-images-1.medium.com/max/800/1*4U6GVwuii6sT_EeAJ_xS3Q.png')
petty = User.create(first_name: 'Petty', last_name: 'Mayonnaise', email: 'petty', birth_date: '1990/01/01', gender: 'female', password: 'password', profile_img_url: 'https://memecrunch.com/meme/9VRF4/petty-mayonnaise/image.png?w=500&c=1',
  bio: 'left on read', cover_img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/petty-memes-1507919419.jpg')
hotdog = User.create(first_name: 'Snapchat', last_name: 'Hot-Dog III', email: "hotdog", location: '7-11', password: 'password', birth_date: '1990/01/01', gender: 'male', profile_img_url: 'https://media1.tenor.com/images/6016e1b0a3c9da4a1ff3f55b0ca2984c/tenor.gif?itemid=9165252',
  bio: 'the spicy bite with the spicy dance moves', cover_img_url: 'https://thefreshtoast.com/wp-content/uploads/2017/10/zjjhbpvwy8w.jpg')

friend1 = Friendship.create(user_id: aaron.id, friend_id: weeknd.id)
friend2 = Friendship.create(user_id: weeknd.id, friend_id: aaron.id)

friend3 = Friendship.create(user_id: aaron.id, friend_id: lavar.id)
friend4 = Friendship.create(user_id: lavar.id, friend_id: aaron.id)

friend5 = Friendship.create(user_id: aaron.id, friend_id: mcd.id)
friend6 = Friendship.create(user_id: mcd.id, friend_id: aaron.id)

friend7 = Friendship.create(user_id: carly.id, friend_id: petty.id)
friend8 = Friendship.create(user_id: petty.id, friend_id: carly.id)






request1 = FriendRequest.create(requester_id: fuzzy.id, requestee_id: aaron.id)
request2 = FriendRequest.create(requester_id: tom.id, requestee_id: aaron.id)
request1 = FriendRequest.create(requester_id: ayy.id, requestee_id: aaron.id)


post1 = Post.create(author_id: aaron.id , receiver_id: aaron.id, content: 'Will the real Aaron Wayne please stand up?')
post2 = Post.create(author_id: weeknd.id , receiver_id: weeknd.id, content: 'got a sweet asian chick, she go lo mein')
post3 = Post.create(author_id: lavar.id, receiver_id: lavar.id, content: 'back in my heyday, I would destroy Aaron Wayne at swimming')
post4 = Post.create(author_id: tyrone.id, receiver_id: tyrone.id, content: 'smoking is bad for you')
post5 = Post.create(author_id: carly.id, receiver_id: carly.id, content: 'hey i just met you, and this is crazy, but heres my function, so callback maybe?')
post6 = Post.create(author_id: petty.id, receiver_id: petty.id, content: 'feeling extra petty and extra extra today')
post7 = Post.create(author_id: hotdog.id, receiver_id: hotdog.id, content: 'when you catch Jesse stealing your dance moves smh')

comment1 = Comment.create(author_id: swaggy.id, content: 'man you averaged 2 points a game in your heyday', post_id: post3.id )
comment2 = Comment.create(author_id: petty.id, content: 'when you never get a callback =(', post_id: post5.id )


like1 = Like.create(user_id: aaron.id, liked_type: 'Post', liked_id: post2.id)
like2 = Like.create(user_id: lavar.id, liked_type: 'Post', liked_id: post3.id)
