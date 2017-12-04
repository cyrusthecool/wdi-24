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
end
