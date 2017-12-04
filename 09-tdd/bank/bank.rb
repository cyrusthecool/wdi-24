class Bank
  attr_reader :name # Defines a getter called #name which retrieves @name
  attr_reader :accounts # Defines a getter called #accounts which retrieves @accounts
  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(account_name, deposit)
    @accounts[account_name] = deposit
  end

  def deposit(account_name, amount)
    @accounts[account_name] += amount
  end

  def withdraw(account_name, amount)
    @accounts[account_name] -= amount if amount <= balance(account_name)
  end

  def balance(account_name)
    @accounts[account_name]
  end
end
