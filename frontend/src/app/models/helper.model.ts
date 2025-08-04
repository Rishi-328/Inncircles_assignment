export interface HelperUser {
    employeeId: number;
    photo: File;
    typeOfService: string;
    organizationName: string;
    fullName: string;
    languages: string[];    
    gender:string;
    phone: string;
    email: string;
    vehicleType: string[];
    kycDocument: File;
    kycDocumentType: string;
    additionalDocuments: File;
    joinedOn: string;
}
    