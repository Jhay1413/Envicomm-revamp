<template>
  <div class="form-container">
    <div class="form-card">
      <h2 class="form-title">Contact Information</h2>
      
      <div class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="contactName" class="form-label">Contact Name</label>
            <input 
              type="text" 
              id="contactName"
              v-model="formData.contactName"
              placeholder="Enter full name"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="projectLocation" class="form-label">Project Location</label>
            <input 
              type="text" 
              id="projectLocation"
              v-model="formData.projectLocation"
              placeholder="Enter Project Location"
              class="form-input"
            >
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="contactNumber" class="form-label">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber"
              v-model="formData.contactNumber"
              placeholder="09XXXXXXXXX"
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input 
              type="email" 
              id="emailAddress"
              v-model="formData.emailAddress"
              placeholder="example@email.com"
              class="form-input"
            >
          </div>
        </div>
        
        <button @click="handleSubmit" class="submit-button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        contactName: '',
        projectLocation: '',
        contactNumber: '',
        emailAddress: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
      alert('Form submitted successfully!');
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 650px;
  width: 100%;
}

.form-title {
  font-size: 20px;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 30px 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
}

.form-input {
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  transition: all 0.2s ease;
  outline: none;
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-input:focus {
  border-color: #6b8e23;
  box-shadow: 0 0 0 3px rgba(107, 142, 35, 0.1);
}

.form-input:hover {
  border-color: #9ca3af;
}

.submit-button {
  background: linear-gradient(135deg, #6b8e23 0%, #556b2f 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-button:hover {
  background: linear-gradient(135deg, #7a9d2f 0%, #64793a 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 142, 35, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-card {
    padding: 24px;
  }
}
</style>