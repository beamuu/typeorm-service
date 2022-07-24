import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type UserType = {
  id?: string;
  firstName?: string;
  lastName?: string;
};

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  /**
   *
   * @param _u You can leave some fields as undefined if you don't wan't to update those fields.
   */
  public update = (_u: UserType) => {
    this.firstName = _u.firstName ? _u.firstName : this.firstName;
    this.lastName = _u.firstName ? _u.firstName : this.firstName;
  };
}
