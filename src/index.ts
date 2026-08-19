export type StudentStatus = "active" | "inactive";

export interface Student {
  id: number;
  name: string;
  email: string;
  status: StudentStatus;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

export function getStudentStatusLabel(status: unknown): string {
  if (status === "active") {
    return "Active Student";
  }

  if (status === "inactive") {
    return "Inactive Student";
  }

  return "Unknown Student Status";
}

export function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === "number" &&
    Number.isInteger(candidate.id) &&
    typeof candidate.name === "string" &&
    candidate.name.length > 0 &&
    typeof candidate.email === "string" &&
    candidate.email.length > 0 &&
    (candidate.status === "active" || candidate.status === "inactive")
  );
}

const sampleStudent: Student = {
  id: 1,
  name: "Alex Santos",
  email: "alex.santos@example.edu",
  status: "active",
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: sampleStudent,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [sampleStudent],
};

const externalValues: unknown[] = [
  sampleStudent,
  { ...sampleStudent, id: "one" },
  { ...sampleStudent, name: undefined },
];

console.log(formatStudent(studentResponse.data));
console.log(getStudentStatusLabel(studentResponse.data.status));
console.log(getStudentStatusLabel("inactive"));
console.log(getStudentStatusLabel("pending"));
console.log(studentsResponse.data.map(formatStudent));
console.log(externalValues.map((value) => isStudent(value)));
