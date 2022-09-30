import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}


export class CreateLesson {
  constructor(
    private lessonRepository: LessonsRepository
  ) { }

  async execute({ title, description }: CreateLessonRequest) {
    // Verificar se já existe lesson com o mesmo titulo

    if (!title) {
      throw new Error("title is required")
    }

    await this.lessonRepository.create({
      title,
      description
    })
  }
}