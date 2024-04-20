# Define class representing a chessboard
class Chessboard
  def initialize
    @board = Array.new(8) { Array.new(8) }
    populate_board
  end

  # Method to populate the board with coordinates
  def populate_board
    (0..7).each do |row|
      (0..7).each do |col|
        @board[row][col] = [row, col]
      end
    end
  end

  # Method to check if a position is valid on the board
  def valid_position?(position)
    row, col = position
    row >= 0 && row < 8 && col >= 0 && col < 8
  end

  # Method to find possible moves for a knight
  def possible_moves(position)
    moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
    possible_moves = []

    moves.each do |move|
      new_row = position[0] + move[0]
      new_col = position[1] + move[1]
      possible_moves << [new_row, new_col] if valid_position?([new_row, new_col])
    end

    possible_moves
  end

  # Method to find the shortest path using breadth-first search
  def knight_moves(start, target)
    queue = [[start]]
    visited = []

    until queue.empty?
      current_path = queue.shift
      current_position = current_path.last

      return current_path if current_position == target

      possible_moves(current_position).each do |move|
        next if visited.include?(move)

        new_path = current_path + [move]
        queue << new_path
        visited << move
      end
    end
  end
end

# Driver script
def display_path(path)
  puts "You made it in #{path.length - 1} moves! Here's your path:"
  path.each { |position| p position }
end

board = Chessboard.new
start = [3, 3]
target = [4, 3]
path = board.knight_moves(start, target)
display_path(path)
