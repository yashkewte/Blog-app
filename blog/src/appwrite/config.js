import conf from "../conf/conf";
import {Client, Databases, ID, Storage, Query} from 'appwrite'

export class Service{
    client = new Client()
    databases
    bucket
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({Title, slug, Content, ImageUrl, Status, userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    ImageUrl,
                    Status,
                    userid
                }
            )

            
        } catch (error) {
            throw error
            
        }
    }

    async updatePost(slug, {Title, Content, ImageUrl, Status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    ImageUrl,
                    Status
                } 
            )

        } catch (error) {
            throw error
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true 

        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal('Status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error
            return false
        }

    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
            return false
        }
    }

    //delete file service
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error
            return false
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

export const service = new Service()

// export default service