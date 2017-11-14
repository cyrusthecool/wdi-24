require 'pry'
# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday
#

days_of_the_week = %w( Monday Tuesday Wednesday Thursday Friday Saturday Sunday )
p days_of_the_week

# ### 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
#

# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving

# days_of_the_week.unshift days_of_the_week.pop # Too clever

days_of_the_week.rotate! -1 # Destructive! method! changes! original! array!

# ### 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days

weekdays = [
  days_of_the_week[1..5], # weekdays
  [ # weekend days
    days_of_the_week[-1],
    days_of_the_week[0]
  ]
]

#
# ### 4. Remove either the weekdays or the weekends
# Your choice...

weekdays.pop

#
# ### 5. Sort the remaining days alphabetically

p weekdays.flatten.sort
