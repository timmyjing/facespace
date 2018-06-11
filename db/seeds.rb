# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Jeff", last_name: "Peters", email: "jeff", gender: "male", birth_date: "1990/01/01", password: "password")
User.create(first_name: "tupac_shakur", last_name: "Shakur", email: "tupac", gender: "male", birth_date: "1990/01/01", password: "password")
User.create(first_name: "Aaron", last_name: "Wayne", email: "niartenyaw", gender: "male", birth_date: "1990/01/01", password: "sweetawesome",
  profile_img_url: "https://avatars3.githubusercontent.com/u/8084693?s=460&v=4", bio: "Instructor @ AppAcademy", location: "San Francisco",
  cover_img_url: "https://www.sweetmag.co.uk/wp-content/uploads/sites/69/2017/03/Sweet-magazine-logo.jpg")
