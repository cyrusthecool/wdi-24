class SinglyLinkedList

  # Node = Struct.new(:value, :next) # TODO: Research how Struct works
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def prepend(value) # AKA .unshift
    node = Node.new(value)
    node.next = @head
    @head = node
  end

  def append(value) # AKA .push
    last.next = Node.new(value)
  end

  def last
    node = @head
    while node && node.next
      node = node.next # Traverse by one to the next node in the list.
    end
    node
  end

  def insert_after(node, new_node)
  end

  def remove # AKA shift
  end

  def length # AKA .count, .size
  end

  def find(needle)
    # Returns the node with value of needle OR nil
  end

  def reverse
  end

  def reverse!
  end

  def each
  end

  # Also: .map, .inject, etc

  # Bonus: at_index => []
end

require 'pry'
binding.pry
