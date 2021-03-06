/**
 * Class used to convert raw difficulty to label in local langage
 */
export class DifficultyConverter {

  private difficultyConverter = new Map<string,string>();

  constructor() {
    this.difficultyConverter.set('low', 'facile');
    this.difficultyConverter.set('medium', 'moyen');
    this.difficultyConverter.set('hard', 'difficile');
  }

  public convertThis(difficulty:string):string {
    return this.difficultyConverter.get(difficulty);
  }
}
