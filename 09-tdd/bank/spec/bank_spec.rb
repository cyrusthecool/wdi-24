require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new 'TDD Bank' }

  describe '.new' do
    it 'creates a new bank object' do
      expect(bank).to_not eq nil
    end

    it 'assigns the bank a name' do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it 'creates an account for some particular person' do
      bank.create_account 'Craigsy', 200
      expect(bank.accounts['Craigsy']).to eq 200
    end
  end

  describe '#deposit' do
    it 'deposits and amount into a particular customer\'s account' do
      bank.create_account 'Jonesy', 100
      bank.deposit 'Jonesy', 100
      expect(bank.accounts['Jonesy']).to eq 200
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a particular customer\'s account' do
      bank.create_account 'Bazza', 100
      bank.withdraw 'Bazza', 50
      expect(bank.accounts['Bazza']).to eq 100-50
    end

    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Chanel', 1
      bank.withdraw 'Chanel', 1_000_000
      expect(bank.balance('Chanel')).to eq 1
    end
  end

  describe '#balance' do
    it 'returns the balance for some particular customer' do
      bank.create_account 'Mad Robby', 500
      expect(bank.balance('Mad Robby')).to eq 500
    end
  end
end
