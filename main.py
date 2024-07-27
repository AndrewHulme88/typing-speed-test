import time

# Function to calculate Words Per Minute(wpm)
def calculate_wpm(correct_words, total_time):
   return round((correct_words / total_time) * 60, 2)

# Function to calculate accuracy
def calculate_accuracy(correct_words, total_words):
   return round((correct_words / total_words) * 100, 2)

def main():
   print("Welcome to the Python Typing Speed Test.")

   # give 2 seconds to prepare
   print("\nGet Ready in 2 seconds...")
   time.sleep(1)
   print("1...")
   time.sleep(1)
   print("GO!")

   # Start time
   start_time = time.perf_counter()

   # Text for the user to type
   text = ("Lorem ipsum dolor sit amet, consectetur adipiscing "
          "elit, sed do eiusmod tempor incididunt ut labore et "
          "dolore magna aliqua. Ut enim ad minim veniam, quis "
          "nostrud exercitation ullamco laboris nisi ut aliquip "
          "ex ea commodo consequat. Duis aute irure dolor in "
          "reprehenderit in voluptate velit esse cillum dolore eu "
          "fugiat nulla pariatur. Excepteur sint occaecat cupidatat "
          "non proident, sunt in culpa qui officia deserunt "
          "mollit anim id est laborum. ")

   # Enter the text to type here and store it in user_input
   user_input = input(text)

   # End time
   end_time = time.perf_counter()

   #Total time taken
   total_time = end_time - start_time

   total_words = text.split()
   correct_words = len([word for word in user_input.split() if word in set(total_words)])

   wpm = calculate_wpm(correct_words, total_time)
   accuracy = calculate_accuracy(correct_words, len(total_words))

   print(f"\nWords Typed: {correct_words}")
   print(f"WPM: {wpm}")
   print(f"Accuracy: {accuracy}%")

if __name__ == "__main__":
   main()
