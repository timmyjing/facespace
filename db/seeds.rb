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
User.create(first_name: "Aaron", last_name: "Wayne", email: "niartenyaw", gender: "male", birth_date: "1990/01/01", password: "sweetawesome",
  profile_img_url: "https://avatars3.githubusercontent.com/u/8084693?s=460&v=4", bio: "Instructor @ AppAcademy. My hobbies include code golfing.", location: "San Francisco")
User.create(first_name: 'LaVar', last_name: "Ball", email: "lavar", gender: "male", birth_date: "1990/01/01", password: "password",
  profile_img_url: "https://www.gannett-cdn.com/-mm-/4bf92aed82a1a285ed5315752f3651cb0d637f53/c=222-10-1690-1968&r=537&c=0-0-534-712/local/-/media/2018/05/02/USATODAY/USATODAY/636608979313901154-C01-Lavar-Ball-95638829.JPG",
  cover_img_url: "https://www.ballerstatus.com/wp-content/uploads/2018/01/bbb1-780x520.jpg", bio: "Big Baller Brand CEO")
User.create(first_name: "Myspace", last_name: "Tom", email: "tom", birth_date: "1990/01/01", gender: "male", password: "password", bio: "Myspace 4 life", profile_img_url: 'https://nasassocialmedia.com/wp-content/uploads/2016/08/1411087218778_wps_28_myspace_tom_8_Las_Vegas_A.jpg' )
User.create(first_name: 'Da', last_name: "Bear", email: "bear", birth_date: "1990/01/01", gender: "male", password: "password", bio: "the bear", profile_img_url: "https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/1/19/Space-042612-001-617x416.jpg/revision/latest?cb=20140902164930")
User.create(first_name: 'The', last_name: 'Sloth', email: "sloth", birth_date: "1990/01/01", gender: 'male', password: "password", bio: 'im lazy', profile_img_url: "https://a-z-animals.com/media/animals/images/original/sloth_9.jpg")
User.create(first_name: "Post", last_name: "Malone", email: "post", birth_date: "1990/01/01", gender: 'male', password: "password", bio: 'white iverson', profile_img_url: 'https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/tkxndk4gl61ruxtjqtyb/post-malone-siriusxm')
User.create(first_name: 'marsh', last_name: "mello", email: "marshmello", birth_date: "1990/01/01", gender: 'male', password: 'password', bio: 'i am so alone', profile_img_url: 'http://i0.wp.com/www.dailycal.org/assets/uploads/2017/01/Marshmello_Circle-Talent.Courtesy-900x580.jpg')
User.create(first_name: 'Klay', last_name: 'Thompson', email: 'klay', birth_date: '1990/01/01', gender: 'male', password: 'password', profile_img_url: 'https://i.imgur.com/73CkWrm.png?1')
User.create(first_name: 'jeff', last_name: 'the killer', email: 'jeffery', birth_date: '1990/01/01' gender: 'male', password: 'password', profile_img_url: 'https://vignette.wikia.nocookie.net/jtk/images/2/2c/Jeff_the_Killer.jpg/revision/latest?cb=20151230202544')
