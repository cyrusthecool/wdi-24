# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#

print "On a scale from 0 to Infinity how bored are you: "
MAX_NUMBER = gets.to_i

SECRET_NUMBER = Random.rand 0..MAX_NUMBER

def prompt_for_guess
  print "Please guess a number between 0 and #{ MAX_NUMBER }: "
  guess = gets.to_i
  return guess
end

guess = prompt_for_guess

until SECRET_NUMBER == guess
  if guess < SECRET_NUMBER
    puts "Wrong, guess higher!"
  else
    puts "Wrong, guess lower!"
  end
  guess = prompt_for_guess
end

puts "You got it"

# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
